import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, Label } from 'semantic-ui-react'
export default function CartSummary() {

  //mağazada ki cart'ı cartItems içerisine at. state e abone olduk
  const { cartItems } = useSelector(state => state.cart) // bizim index te verdiğimiz store içinde ki cart state ini atadık abone oldukredux'a
  return ( //We can use ES6 Destructuring assignment
    <div>
      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
          {
            cartItems.map((cartItem) => (
              <Dropdown.Item key={cartItem.product.id}>
                {cartItem.product.title}
                <Label>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))
          }

          <DropdownDivider />
          <Dropdown.Item as={NavLink} to="/cart"> Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
