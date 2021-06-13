(function (){
    Promise._any = function ( promises ) {
        return new Promise( function ( resolve, reject ) {
            let errors = [], count, i = 0, processPromise;
            count = promises.length;
            if ( !promises.length ) {
                reject( new Error('AggregateError: All promises were rejected'));
                return;
            }

            processPromise = function ( index ) {
                if (promises[index] && promises[index].then) {
                    promises[index].then(resolve, value => {
                        errors[index] = value;
                        if (!--count) {
                            reject(errors);
                        }
                    });
                } else {
                    resolve(promises[index]);
                }
            };

            while (i < promises.length) {
                processPromise(i++);
            }
        });
    };

    Promise._allSettled = function ( promises ) {
        return new Promise( function ( resolve, reject ) {
            let results = [], count, i = 0, processPromise;
            count = promises.length;
            if ( !promises.length ) {
                resolve( [] );
                return;
            }

            processPromise = function ( index ) {
                if (promises[index] && promises[index].then) {
                    promises[index]
                        .then(
                                value => {
                                    results[index] = value;
                                    if (!--count) {
                                        resolve(results);
                                    }
                                },
                                value => {
                                    results[index] = value;
                                    if (!--count) {
                                        resolve(results);
                                    }
                                })
                } else {
                    results[index] = promises[index];
                    if (!--count) {
                        resolve(results);
                    }
                }
            };

            while (i < promises.length) {
                processPromise(i++);
            }
        });
    };

    Promise.prototype._finally = (cb) => Promise.then(
        value => Promise.resolve(cb()).then(() => value),
        err => Promise.resolve(cb()).then(() => { throw err; })
    );
}());