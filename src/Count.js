import React from "react";

const Skc = () => {
  renderCount = () => {
    return props.counters.map((value, i) => {
      return (
        <div>
          <h1>{value}</h1>
          <p>
            <button onClick={() => incrementCount}>+</button>
            <button onClick={() => decrementCount}>-</button>
          </p>
        </div>
      );
    });
  };
  return (
    <div style={styles.container}>
      <h1>{props.count}</h1>
      <p>
        <button onClick={() => incrementCount(i)}>+</button>
        <button onClick={() => decrementCount(i)}>-</button>
      </p>
    </div>
  );
};
export default Skc;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
