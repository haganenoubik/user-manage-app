import { FC, memo } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting } = props;
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={() => { onClickHome(); onClose(); }}>TOP</Button>
              <Button w="100%" onClick={() => { onClickUserManagement(); onClose(); }}>ユーザー一覧</Button>
              <Button w="100%" onClick={() => { onClickSetting(); onClose(); }}>設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
});
