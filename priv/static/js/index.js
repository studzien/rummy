// This file is auto-generated by `ember build`.
// You should not modify it.

var App = window.App = require('./config/app');
require('./templates');


App.ApplicationController = require('./controllers/application_controller');
App.IndexController = require('./controllers/index_controller');
App.LobbyController = require('./controllers/lobby_controller');
App.RegisterController = require('./controllers/register_controller');
App.TableController = require('./controllers/table_controller');
App.ApplicationRoute = require('./routes/application_route');
App.IndexRoute = require('./routes/index_route');
App.LobbyRoute = require('./routes/lobby_route');
App.TableRoute = require('./routes/table_route');
App.DeckTileView = require('./views/deck_tile_view');
App.NewTileView = require('./views/new_tile_view');
App.NicknamefieldView = require('./views/nicknamefield_view');
App.SetTileView = require('./views/set_tile_view');
App.TileView = require('./views/tile_view');
App.Draggable = require('./mixins/draggable');
App.Droppable = require('./mixins/droppable');

require('./config/routes');

module.exports = App;

