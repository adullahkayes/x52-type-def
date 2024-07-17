import { LIFECYCLE_STAGES_DEV_HOUSE, LIFECYCLE_STAGES_PRODUCTION, LIFECYCLE_STAGES_UAT } from "./life-cycle";

export interface EndPointURL {
    server: string;
    port: number;
    path: string;
    version: string;
}

export interface EndPointDef_DevHouse {
    lifeCycleStage: LIFECYCLE_STAGES_DEV_HOUSE;
    endpointurl: EndPointURL;
    remarks: string;
}

export interface EndPointDef_UAT {
    lifeCycleStage: LIFECYCLE_STAGES_UAT;
    endpointurl: EndPointURL;
    remarks: string;
}

export interface EndPointDef_Production {
    lifeCycleStage: LIFECYCLE_STAGES_PRODUCTION;
    endpointurl: EndPointURL;
    remarks: string;
}