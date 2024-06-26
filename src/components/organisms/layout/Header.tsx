import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onClickUserManagement = useCallback(() => {
    navigate("/home/user_management");
  }, [navigate]);

  const onClickSetting = useCallback(() => {
    navigate("/home/setting");
  }, [navigate]);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}  onClick={onClickHome} >ユーザー管理アプリ</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "Flex" }}>
          <Box pr={4} onClick={onClickUserManagement}>
            ユーザー一覧
          </Box>
          <Box onClick={onClickSetting}>
            設定
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen}  />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
