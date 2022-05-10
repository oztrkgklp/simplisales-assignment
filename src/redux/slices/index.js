import testReducer, { getTestData, actions as testActions } from "./testSlice";

export default {
    test: {
        reducer: testReducer,
        getTestData,
        setTestData: testActions.setTestData,
    },
};
