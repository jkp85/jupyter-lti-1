[![Build Status](https://travis-ci.com/IllumiDesk/jupyter-lti.svg?branch=master)](https://travis-ci.org/IllumiDesk/jupyter-lti)
[![npm version](http://img.shields.io/npm/v/@illumidesk/jupyter-lti.svg?style=flat)](https://npmjs.org/package/@illumidesk/jupyter-lti 'View this project on npm')

# jupyterlab-lti

IllumiDesk's Canvas LMS assignment submission button.

## Installation

```bash
jupyter labextension install @illumidesk/jupyter-lti
```

Once installed you can [enable or disable extensions](https://jupyterlab.readthedocs.io/en/stable/user/extensions.html#installing-extensions).

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

- Install and activate conda environment

```bash
  wget https://repo.continuum.io/miniconda/Miniconda2-latest-Linux-x86_64.sh -O ~/miniconda.sh;
  bash ~/miniconda.sh -b -p $HOME/miniconda
  export PATH="$HOME/miniconda/bin:$PATH"
  pip install --pre jupyterlab
```

- Install dependencies

```bash
jlpm install
jlpm run build
jupyter labextension install .
```

You can then run JupyterLab in watch mode to automatically pick up changes to @illumidesk/jupyter-lti. Open a terminal in the @illumidesk/jupyter-lti repository directory and enter:

```bash
jlpm run watch
```

Then launch JupyterLab using:

```bash
jupyter lab --watch
```

This will automatically recompile @illumidesk/jupyter-lti upon changes, and JupyterLab will rebuild itself. You should then be able to refresh the page and see your changes.

```bash
jupyter lab
```

## Integration with LTI Compatible LMS

- Make sure you are authenticated to the LTI compatible LMS (currently only tested with the [Canvas LMS](https://www.canvaslms.com/)) and that you launch a JupyterLab instance from Canvas.

Only users with the `Student` role are able to see the extension and submit an assignemt to the Canvas LMS.

[These help docs](https://docs.illumidesk.com) contain more information about the Canvas LMS and IllumiDesk configuration steps.
