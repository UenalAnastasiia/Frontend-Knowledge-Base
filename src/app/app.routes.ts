import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { AddKnowledgeComponent } from './add-knowledge/add-knowledge.component';
import { AgbComponent } from './agb/agb.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: StartpageComponent },
    { path: 'add', component: AddKnowledgeComponent },
    { path: 'agb', component: AgbComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
];
