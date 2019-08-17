import global from "@/api/global";

const version = global.url + "/v" + global.version;
const api = {
  Login: version + "/user/login",
  GetUser: version + "/pcUser/getUserByToken",
  GetProject: version + "/userProject/getProject",
  ChangePwd: version + "/user/changePwd",
  GetResModel: version + "/userProject/getResModel",
  GetResDrawing: version + "/userProject/getResDrawing",
  GetResMeterial: version + "/userProject/getResMeterial",
  CheckVersion: version + "/version/checkVersion",
	Upload:version+"/Upload/uploadCategory"
};
export default api;
