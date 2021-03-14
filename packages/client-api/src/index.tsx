// export {
//   signup,
//   login,
//   logout,
//   getCurrentUser,
//   getActivationCode,
//   verifyCode,
// } from './Requests/auth';
// export { getUsers, getUser, updateUser, removeUser } from './Requests/user';
// export {
//   addCompany,
//   getCompanies,
//   getCompany,
//   updateCompany,
//   getUsersByCompany,
//   removeCompany,
// } from './Requests/company';
// export {
//   addDevice,
//   getDevices,
//   getDevice,
//   getUsersByDevice,
//   updateDevice,
//   removeDevice,
// } from './Requests/device';
// export {
//   sendMessages,
//   getMessages,
//   removeMessage,
//   clear,
//   subscribe,
//   publish,
// } from './Requests/message';

//import auth from './Requests/auth';

export { default as auth } from './Requests/auth';
export { default as user } from './Requests/user';
export { default as company } from './Requests/company';
export { default as device } from './Requests/device';
export { default as message } from './Requests/message';
