import CMS from 'netlify-cms'

import GeneralPreview from './templates/dump'
import './dummy'

(["members", "families", "roles", "music", "services"]).forEach((name) => {
    CMS.registerPreviewTemplate(name, GeneralPreview);
})

