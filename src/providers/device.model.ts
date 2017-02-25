interface StatEntry {
  image: string;
  pid  : number;
}

export interface CPUStatEntry extends StatEntry {
  average    : number;
  cpu        : number;
  cycle      : number;
  description: string;
  elevated   : boolean;
  status     : string;
  version    : string;
}

export interface RAMStatEntry extends StatEntry {
  commit    : number;
  errors    : number;
  shareable : number;
  workingSet: number;
}

export interface NetStatEntry extends StatEntry {
  recieve: number;
  send   : number;
}

export interface DiskStatEntry extends StatEntry {
  file    : string;
  priority: string;
  read    : number;
  response: number;
  write   : number;
}

export interface CPUStat {
  total: number;
  entries: Array<CPUStatEntry>;
}
export interface RAMStat {
  total: number;
  entries: Array<RAMStatEntry>;
}
export interface NetStat {
  entries: Array<NetStatEntry>;
}
export interface DiskStat {
  averageSpeed: number;
  averageSpeedDimensions: string;
  entries: Array<DiskStatEntry>;
}

export interface DeviceStats {
  cpu : CPUStat;
  ram : RAMStat;
  net : NetStat;
  disk: DiskStat
};

export interface Device {
  id       : number;
  load     : number;
  stats    : DeviceStats;
  taskGroup: string;
}

export type Devices = Array<Device>;
