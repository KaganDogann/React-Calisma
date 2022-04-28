import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService';


export default function ProductDetail() {
    let { id } = useParams() //=>useParams parametreleri obje oalrak veriyor

    const [post, setPost] = useState({});

  useEffect(()=>{
    let productService = new ProductService()
    //console.log("useEffect çalıştı")
    productService.getProductById(id).then(result=>setPost(result.data))
  },[]) //[]=>state değiştirğinde mesela değer değiştiğidinde category değiştiğinde sayfayı yenile anlamında gibi gibi
    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header>{post.title}</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            {post.body}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
