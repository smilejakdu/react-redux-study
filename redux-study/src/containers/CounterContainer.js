import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../Counter';
import DataCollection from '../DataCollection';
import { increase, decrease } from '../modules/counter';
import Navigation from '../Navigation';

const CounterContainer = () => {
	const number = useSelector((state) => state.counter.number);
	const dispatch = useDispatch();

	// useCallback

	const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
	const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

	return (
		<div>
			<Navigation />
			<Counter
				number={number}
				onIncrease={onIncrease}
				onDecrease={onDecrease}
			/>
			<DataCollection />
		</div>
	);
};

// 	return (
// 		<div>
// 			<Counter
// 				number={number}
// 				onIncrease={() => dispatch(increase())}
// 				onDecrease={() => dispatch(decrease())}
// 			/>
// 			<DataCollection />
// 		</div>
// 	);
// };

export default React.memo(CounterContainer);
