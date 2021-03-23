import CollapseApp from './Collapse/CollapseApp';
import CollapseController from './Collapse/CollapseController';
import CollapseLayout from './Collapse/CollapseLayout';

const collapse = new CollapseApp(new CollapseLayout(), new CollapseController());

collapse.init();
