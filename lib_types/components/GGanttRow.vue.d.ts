import type { GanttBarObject } from "../types";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    label: string;
    bars: GanttBarObject[];
    overlaps?: GanttBarObject[] | undefined;
    highlightOnHover?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    drop: (value: {
        e: MouseEvent;
        datetime: string | Date;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    label: string;
    bars: GanttBarObject[];
    overlaps?: GanttBarObject[] | undefined;
    highlightOnHover?: boolean | undefined;
}>>> & {
    onDrop?: ((value: {
        e: MouseEvent;
        datetime: string | Date;
    }) => any) | undefined;
}, {}, {}>, {
    label?(_: {}): any;
    "bar-label"?(_: {
        bar: GanttBarObject;
    }): any;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
