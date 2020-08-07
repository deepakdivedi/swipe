import React, { useRef, Component } from "react";
import { View, StyleSheet, Animated, PanResponder } from "react-native";

/*const Ball = () => {
  const pan = new Animated.ValueXY(0, 0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 20, y: 500 } } // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.ball]}
      />
    </View>
  );
};
*/

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 },
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
  },
});

export default Ball;
