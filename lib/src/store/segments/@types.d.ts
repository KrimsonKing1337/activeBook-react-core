export type Segment = {
    id: string;
    isActive: boolean;
};
export type Segments = Record<string, boolean>;
export interface State {
    segments: Segments;
    lastActiveId: string;
    count: number;
}
