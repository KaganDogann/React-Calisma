import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';

export default function ProductList() {
  //fonksiyon çağırmak için bu dispatch ifadesini kullanıyoruz
  const dispatch = useDispatch()//bir aksiyon çağırmak için fonksiyon çağırmak için kullanıyoruz
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setPosts(result.data))
  }, []) //Aslında her render işlemi sonrası çalışabildiği gibi bizim belirttiğimiz değişkenlerin değişmesi sonrasında da çalışabilir ya da sadece ilk render işlemi sonrası çalışabilir.

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)) //burada fonksiyonu çağırıyorum işte addToCart'a abone oluyorum
    toast.success(`${product.title} spete eklendi!`)
  };


  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>UserId</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            posts.map((post) => (
              <Table.Row key={post.id}>
                <Table.Cell>{post.userId}</Table.Cell>
                <Table.Cell><Link to={`/products/${post.id}`}>{post.title}</Link></Table.Cell>
                <Table.Cell>{post.body}</Table.Cell>
                <Table.Cell><Button onClick={() => handleAddToCart(post)}>Sepete ekle</Button></Table.Cell>
              </Table.Row>

            ))
          }


        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
