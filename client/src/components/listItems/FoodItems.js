import { Card } from "antd";

import RemoveFood from "../buttons/RemoveFood";

const someStyling = () => ({
    card: {
        width: "500px"
    }
})

const FoodItems = (props) => {
    const {id, firstName, lastName} = props;

    const styles = someStyling();
    return (
        <Card
            style={styles.card}
            actions={[
                <RemoveFood id={id} firstName={firstName} lastName={lastName}/>
            ]}
        >
            {firstName} {lastName}
        </Card>
    )
}

export default FoodItems