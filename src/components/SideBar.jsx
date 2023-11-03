
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SideBar() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Menu</h2>
                <a href="/get"> Table </a>
                <a href="/post"> Subir usuario </a>
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
        </div>
    )
}