const data = require('./mock/data.json');
const R = require('ramda');

module.exports = () => {
    const isNL = item => item.country === 'Netherlands';
    const isBrazil = item => item.country === 'Brazil';

    const filter = R.anyPass([isBrazil, isNL]);

    const transformer = R.compose(
        R.filter(filter),
    )

    const reducer = (acc, item) => {
        return [
            ...acc,
            item
        ]
    }

    const into = R.into(
        [],
        transformer,
        data
    );

    console.log('withInto', into);

    const withReduce = R.transduce(
        transformer,
        reducer,
        [],
        data
    )

    console.log('withTransduce', withReduce);

}