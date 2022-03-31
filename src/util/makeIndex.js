import fs from 'fs';
import path from 'path';
import elasticlunr from 'elasticlunr';

const indexPath = path.join('..', 'index.json')

const index = elasticlunr(function () {
    this.addField('title');
    this.addField('body');
    this.setRef('id');
    this.saveDocument(true);
});

const loadIndex = () => {elasticlunr.Index.load(JSON.parse(fs.readFileSync(indexPath)))}

export {index, indexPath, loadIndex}