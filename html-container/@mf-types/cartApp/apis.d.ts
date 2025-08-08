
    export type RemoteKeys = 'cartApp/App';
    type PackageType<T> = T extends 'cartApp/App' ? typeof import('cartApp/App') :any;