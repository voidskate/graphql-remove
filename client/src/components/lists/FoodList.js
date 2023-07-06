import { useQuery } from "@apollo/client";
import { GET_FOODS } from "../../queries";
import { List } from "antd"

import FoodItems from "../listItems/FoodItems";

const someStyling = () => ({
    list: {
        display: "flex",
        justifyContent: "center",
        marginTop: "25vh"
    }
})

const FoodList = () => {
    const styles = someStyling();

    const { loading, error, data } = useQuery(GET_FOODS);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

    console.log("data", data);

    return (
        <List
            grid={{ gutter: 20, column: 1}}
            style={styles.list}
        >
            { data.allFoods.map(({ id, firstName, lastName }) => (
                <List.Item key={id}>
                    <FoodItems id={id} firstName={firstName} lastName={lastName}/>
                </List.Item>
            ))}
        </List>
    )
}

export default FoodList