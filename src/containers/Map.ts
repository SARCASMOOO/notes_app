declare global {
    interface Map<K, V> {
        map<T>(fn: (key: K, value: V) => T): T[];

        /**
         * Performs a deep copy
         * */
        copy(): Map<K, V>;
    }
}


function mapForMap<K, V, T>(map: Map<K,V>, fn: (key: K, value: V) => T) {
    let result: T[] = [];

    map.forEach((value, key) => {
        result.push((fn(key, value)));
    });

    return result;
}

function copyMap<K, V>(map: Map<K, V>) {
    let newMap = new Map<K,V>();

    map.forEach((value, key) => newMap.set(key, value));

    return newMap;
}

Map.prototype.map = function <K, V, T>(this: Map<K, V>, fn: (key: K, value: V) => T) {
    return mapForMap(this, fn);
};

Map.prototype.copy = function <K, V>(this: Map<K, V>) {
    return copyMap(this);
};


// Map = 1 -> hello, 2 => world, 3 => steven (Map<number, string>)
// fn: (key, value) => `${key} ${value}`
// ['1 hello', '2 world', '3 steven']
//

export {};