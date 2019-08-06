Ext.define("myApp.store.Session", {
  extend: "Ext.data.Store",
  model: "AM.model.User",
  autoLoad: true,
  proxy: {
    type: "ajax",
    actionMethods: {
      create: "POST",
      read: "GET",
      update: "PUT",
      destroy: "POST"
    },
    api: {
      read: "http://localhost:3004/users",
      update: "http://localhost:3004/users"
    },
    reader: {
      type: "json",
      root: "users",
      successProperty: "success"
    }
  }
});
