import * as React from "react";
import { List } from "react-native-paper";
import { colors } from "../../../../infrastructure/themes/colors";

const RestaurantMenuList = () => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinkExpanded] = React.useState(false);

  const toggleExpandedList = (state, setExpandedState) =>
    setExpandedState(!state);

  const boldColor = colors.highlight.bold;

  const titleStyle = { color: boldColor };
  return (
    <List.Section titleStyle={titleStyle}>
      <List.Accordion
        titleStyle={titleStyle}
        title="Breakfast"
        left={(props) => (
          <List.Icon {...props} icon="bread-slice" color={boldColor} />
        )}
        expanded={breakfastExpanded}
        onPress={() =>
          toggleExpandedList(breakfastExpanded, setBreakfastExpanded)
        }
      >
        <List.Item title="Sandwich" />
      </List.Accordion>

      <List.Accordion
        titleStyle={titleStyle}
        title="Lunch"
        left={(props) => (
          <List.Icon {...props} icon="hamburger" color={boldColor} />
        )}
        expanded={lunchExpanded}
        onPress={() => toggleExpandedList(lunchExpanded, setLunchExpanded)}
      >
        <List.Item title="Meal Box" />
      </List.Accordion>

      <List.Accordion
        titleStyle={titleStyle}
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food" color={boldColor} />}
        expanded={dinnerExpanded}
        onPress={() => toggleExpandedList(dinnerExpanded, setDinnerExpanded)}
      >
        <List.Item title="Dinner box" />
      </List.Accordion>

      <List.Accordion
        titleStyle={titleStyle}
        title="Drinks"
        left={(props) => (
          <List.Icon {...props} icon="glass-cocktail" color={boldColor} />
        )}
        expanded={drinksExpanded}
        onPress={() => toggleExpandedList(drinksExpanded, setDrinkExpanded)}
      >
        <List.Item title="Aerated Drink" />
      </List.Accordion>
    </List.Section>
  );
};

export default RestaurantMenuList;
