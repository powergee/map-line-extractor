import { Paper, Typography, IconButton, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Tooltip, Collapse, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Fragment, useEffect, useState } from "react";
import { CustomOverlayMap, Map, Polyline } from "react-kakao-maps-sdk";
import { useSnackbar } from 'notistack';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CircleIcon from '@mui/icons-material/Circle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import SaveIcon from '@mui/icons-material/Save';
import colors from "./getColors";
import './App.css';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const [mousePosition, setMousePosition] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [editName, setEditName] = useState("");
  const [handlingPoint, setHandlingPoint] = useState("back");
  const [paths, setPaths] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  function createPath(name) {
    return {
      name: name,
      points: [],
      counter: (paths.length === 0 ? 0 : paths.reduce((p1, p2) => (p1.counter < p2.counter ? p2 : p1)).counter+1)
    }
  }

  useEffect(() => {
    const savedPaths = JSON.parse(localStorage.getItem("paths"));

    if (savedPaths === null) {
      setPaths([createPath("이름 없는 경로 1")]);
    } else {
      setPaths(savedPaths);
    }
  }, []);

  function handleClick(_target, event) {
    if (!isEditing) {
      return;
    }

    const point = {
      lat: event.latLng.getLat(),
      lng: event.latLng.getLng()
    };
    const newPaths = [...paths];

    if (handlingPoint === "back") {
      newPaths[selectedIndex].points.push(point);
    } else {
      newPaths[selectedIndex].points.unshift(point);
    }
    console.log(newPaths)
    setPaths(newPaths);
  }

  function handleRightClick(_target, _event) {
    if (!isEditing || paths[selectedIndex].length === 0) {
      return;
    }

    const newPaths = [...paths];
    if (handlingPoint === "back") {
      newPaths[selectedIndex].points.pop();
    } else {
      newPaths[selectedIndex].points.shift();
    }
    console.log(newPaths)
    setPaths(newPaths);
  }

  function handleMouseMove(_target, event) {
    setMousePosition({
      lat: event.latLng.getLat(),
      lng: event.latLng.getLng()
    })
  }

  function roundCoord(coord) {
    return (Math.round(coord*100) / 100).toFixed(2);
  }

  function enterMovingMode() {
    setIsEditing(false);
  }

  function enterEditingMode() {
    setIsEditing(true);
  }

  function handleOptionChange(event) {
    setHandlingPoint(event.target.value);
  }

  function getPathClickHandler(index) {
    return () => {
      setSelectedIndex(index);
    };
  }

  function appendNewPath() {
    const nameSet = new Set(paths.map(path => path.name));
    let index = 1;
    while (nameSet.has(`이름 없는 경로 ${index}`)) {
      ++index;
    }
    setPaths([...paths, createPath(`이름 없는 경로 ${index}`)]);

    enqueueSnackbar(`"이름 없는 경로 ${index}"를 추가하였습니다.`, { variant: "success" });
  }

  function openEditNameDialog() {
    setEditName(paths[selectedIndex].name);
    setEditOpened(true);
  }

  function removePath() {
    if (paths.length === 1) {
      enqueueSnackbar("경로를 삭제할 수 없습니다. 경로는 적어도 한 개 존재해야 합니다.", { variant: "error" });
    } else {
      const name = paths[selectedIndex].name;
      const newPaths = [...paths];
      newPaths.splice(selectedIndex, 1);

      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex-1);
      }

      setPaths(newPaths);
      enqueueSnackbar(`경로 "${name}"를 제거하였습니다.`, { variant: "success" });
    }
  }

  function handleTextFieldChange(event) {
    setEditName(event.target.value);
  }

  function handleEditDialogClose() {
    setEditOpened(false);
  }

  function applyEditDialogAndClose() {
    const name = paths[selectedIndex].name;
    const newPaths = [...paths];
    newPaths[selectedIndex].name = editName;
    setEditOpened(false);
    enqueueSnackbar(`"${name}"을 "${editName}"으로 수정하였습니다.`, { variant: "success" });
  }

  function saveTextData(text, filename) {
    const element = document.createElement("a");
    const textFile = new Blob([[text]], {type: "text/plain"});
    element.href = URL.createObjectURL(textFile);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  function saveAsJSON() {
    saveTextData(JSON.stringify(paths), "paths.json");
  }

  function saveAsCSV() {
    const csvLines = ["datatype;x;y"];
    paths.forEach(path => {
      path.points.forEach(point => {
        csvLines.push(`${path.name};${point.lat};${point.lng}`);
      });
    });
    saveTextData(csvLines.join("\n"), "paths.csv");
  }

  function saveToLocal() {
    localStorage.setItem("paths", JSON.stringify(paths));
    enqueueSnackbar(`작업 내역을 브라우저(localStorage)에 저장하였습니다.`, { variant: "success" });
  }

  return (
    <div className="App">
      <Map 
        className="app-map"
        center={{ lat: 37.5642135, lng: 127.0016985 }}
        level={7}
        onClick={handleClick}
        onRightClick={handleRightClick}
        onMouseMove={handleMouseMove}
      >
        {mousePosition !== undefined &&
          <CustomOverlayMap
            key="mouse-position"
            position={mousePosition}
            zIndex={2}
          >
            <div className="app-mouse-info">
              <Paper className="app-mouse-paper">
                <Typography variant="subtitle2">
                  {`위도 ${roundCoord(mousePosition.lat)}, 경도 ${roundCoord(mousePosition.lng)}`}
                </Typography>
              </Paper>
            </div>
          </CustomOverlayMap>
        }

        {paths.map(path => (
          <Fragment>
            <Polyline
              path={[path.points]}
              strokeWeight={3}
              strokeColor={colors[path.counter % colors.length]}
              strokeOpacity={1}
              strokeStyle={"solid"}
            />

            {path.points.map(point => (
              <CustomOverlayMap
                position={point}
                zIndex={1}
              >
                <div
                  className="app-map-point"
                  style={{ border: `3px solid ${colors[path.counter % colors.length]}` }}
                />
              </CustomOverlayMap>
            ))}
          </Fragment>
        ))}
      </Map>

      <Paper className="app-panel">
        <div className="app-panel-layout">
          <Typography variant="h5" className="app-panel-title">
            경로 목록
          </Typography>

          <div className="app-panel-controls">
            <Button onClick={appendNewPath}>새 경로 추가</Button>
            <Button onClick={openEditNameDialog}>이름 수정</Button>
            <Button onClick={removePath}>경로 삭제</Button>
          </div>

          <div className="app-panel-button-container">
            {paths.map((path, index) => (
              <Button 
                className="app-panel-button"
                onClick={getPathClickHandler(index)}
                style={{
                  backgroundColor: (index === selectedIndex ? "silver" : "transparent"),
                  color: colors[path.counter % colors.length]
                }}
              >
                <CircleIcon></CircleIcon>
                <Typography className="app-panel-button-text">{path.name}</Typography>
              </Button>
            ))}
          </div>
        </div>
      </Paper>

      <Paper className="app-toolbar">
        <div className="app-toolbar-layout">
          <div className="app-toolbar-modes">
            <Tooltip title="지도 이동">
              <IconButton onClick={enterMovingMode}>
                <ControlCameraIcon color={isEditing ? "default" : "primary"}></ControlCameraIcon>
              </IconButton>
            </Tooltip>

            <Tooltip title="위치 추가">
              <IconButton onClick={enterEditingMode}>
                <BorderColorIcon color={isEditing ? "primary" : "default"}></BorderColorIcon>
              </IconButton>
            </Tooltip>
          </div>

          <Collapse in={isEditing}>
            <div className="app-toolbar-options">
              <FormControl component="fieldset">
                <FormLabel component="legend">수정할 위치</FormLabel>
                <RadioGroup 
                  row aria-label="gender"
                  name="row-radio-buttons-group"
                  value={handlingPoint}
                  onChange={handleOptionChange}
                >
                  <FormControlLabel value="front" control={<Radio />} label="앞" />
                  <FormControlLabel value="back" control={<Radio />} label="뒤" />
                </RadioGroup>
              </FormControl>

              <Typography variant="caption">
                왼쪽 클릭: 지점 추가
              </Typography>

              <Typography variant="caption">
                오른쪽 클릭: 지점 제거
              </Typography>
            </div>
          </Collapse>
        </div>
      </Paper>

      <Paper className="app-save">
        <div className="app-save-layout">
          <Button color="secondary" onClick={saveToLocal} startIcon={<SaveIcon></SaveIcon>}>
            <Typography variant="subtitle1">작업 내역 저장</Typography>
          </Button>
          <Button onClick={saveAsJSON} startIcon={<AccountTreeIcon></AccountTreeIcon>}>
            <Typography variant="subtitle1">JSON으로 다운로드</Typography>
          </Button>
          <Button onClick={saveAsCSV} startIcon={<BackupTableIcon></BackupTableIcon>}>
            <Typography variant="subtitle1">CSV로 다운로드</Typography>
          </Button>
        </div>
      </Paper>

      <Dialog open={editOpened} onClose={handleEditDialogClose}>
        <DialogTitle>경로 이름 수정</DialogTitle>
        <DialogContent>
          <DialogContentText>
            경로 이름을 설정해주세요.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="새 경로 이름"
            fullWidth
            variant="standard"
            value={editName}
            onChange={handleTextFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>취소</Button>
          <Button onClick={applyEditDialogAndClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
