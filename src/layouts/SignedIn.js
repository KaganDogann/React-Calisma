import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
//pointing="top left" text='Kağan' pointing=> küçük çeltik, text=> üzerine yazılacak yazı
export default function SignedIn({signOut,bisey}) { // burası düz props altta kullanılırken props.signOut
    //console.log(bisey)
    //<Dropdown pointing="top left" text={bisey}></Dropdown>
    return (
        
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://picsum.photos/id/237/200/300" />
                <Dropdown pointing="top left" text="Kağan"> 
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim"  icon="info"/>  
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon ="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
