export class App {
  constructor(){
  }

  configureRouter(config, router){
    config.title = "Hi"
    config.map([
      {route: '', name: 'home', moduleId: PLATFORM.moduleName('index'), title: 'Home'},
      {route: 'about', name: 'about', moduleId: PLATFORM.moduleName('about/about'), title: 'About'},
      {route: 'todos/:slug', name: 'todos', moduleId: PLATFORM.moduleName('todos'), title: 'Todos' }
    ]);
  }
}
