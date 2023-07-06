import { useMutation } from '@apollo/client'
import { GET_FOODS, REMOVE_FOOD } from '../../queries'

import { DeleteOutlined } from '@ant-design/icons'
import filter from 'lodash.filter'

const RemoveFood = ({ id }) => {
  const [removeFood] = useMutation(REMOVE_FOOD, {
    update(cache, { data: { removeFood } }) {
      const { allFoods } = cache.readQuery({ query: GET_FOODS })

      const updated = filter(allFoods, (x) => x.id !== removeFood.id)

      cache.writeQuery({
        query: GET_FOODS,
        data: {
          allFoods: updated,
        },
      })
    },
  })

  const deleteAction = () => {
    let result = window.confirm('Are you sure you want to delete this food?')
    if (result) {
      removeFood({
        variables: {
          id
        }
      })
    }
  }

  return <DeleteOutlined key='delete' onClick={deleteAction} style={{ color: 'red' }} />
}

export default RemoveFood