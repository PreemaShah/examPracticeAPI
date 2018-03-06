exports.route=function (app)
{
    const deptController=require('./controller/deptController');
    const empController=require('./controller/empController');
    app.post('/dept/insert',deptController.insert);
    app.put('/dept/update/:id',deptController.update);
    app.get('/dept/get',deptController.getAll);
    app.get('/dept/get/:id',deptController.getOne);
    app.put('/dept/delete/:id',deptController.delete);
    app.post('/emp/insert',empController.insert);
    app.put('/emp/update/:id',empController.update);
    app.get('/emp/get',empController.getAll);
    app.get('/emp/get/:id',empController.getOne);
    app.put('/emp/delete/:id',empController.delete);
};