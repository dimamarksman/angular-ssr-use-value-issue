import { InjectionToken, WritableSignal } from "@angular/core";

export const MY_DATA_PROVIDER = new InjectionToken<{ count: WritableSignal<number> }>('my-data-provider');