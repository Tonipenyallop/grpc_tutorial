// Original file: proto/chatPackage.proto

export const Status = {
  UNKNOWN: 0,
  ONLINE: 1,
  OFFLINE: 2,
} as const;

export type Status =
  | 'UNKNOWN'
  | 0
  | 'ONLINE'
  | 1
  | 'OFFLINE'
  | 2

export type Status__Output = typeof Status[keyof typeof Status]
