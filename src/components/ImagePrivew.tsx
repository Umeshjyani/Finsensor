import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image'
import { useState } from 'react';

export default function ImagePreview({ open, setOpen, image }: any) {
    return (
        <div>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <button style={{ display: 'none' }} />
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', inset: 0 }} />
                    <Dialog.Content
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>
                        {/* <img
                            src={image}
                            alt="Preview"
                            style={{ width: '100%', height: 'auto' }}
                        /> */}
                        <Image src={image} alt="Preview" />
                        
                        <Dialog.Close asChild>
                            <button>Close</button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
