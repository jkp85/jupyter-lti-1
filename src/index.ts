import {
  IDisposable, DisposableDelegate
} from '@phosphor/disposable';

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ToolbarButton
} from '@jupyterlab/apputils';

import {
  DocumentRegistry
} from '@jupyterlab/docregistry';

import {
  NotebookPanel, INotebookModel
} from '@jupyterlab/notebook';


/**
 * The plugin registration information.
 */
const plugin: JupyterLabPlugin<void> = {
  activate,
  id: 'illumidesk_canvas:buttonPlugin',
  autoStart: true
};


/**
 * A notebook widget extension that adds a button to the toolbar.
 */
export
class ButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {
  /**
   * Create a new extension object.
   */
  createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
    let callback = () => {
        let url = window.location.pathname.split('endpoint')[0] + "lti/assignment/";
        context.save();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({'path': context.path}),
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            referrerPolicy: "no-referrer"
        }).then(res => res.json())
        .catch(console.error)
        .then(console.log)
    };
    let button = new ToolbarButton({
      className: 'myButton',
      onClick: callback,
      tooltip: 'Submit to Canvas'
    });

    let i = document.createElement('i');
    i.classList.add('fa', 'fa-share-square');
    button.node.appendChild(i);

    panel.toolbar.insertItem(0, 'submit', button);
    return new DisposableDelegate(() => {
      button.dispose();
    });
  }
}

/**
 * Activate the extension.
 */
function activate(app: JupyterLab) {
  app.docRegistry.addWidgetExtension('Notebook', new ButtonExtension());
};


/**
 * Export the plugin as default.
 */
export default plugin;
