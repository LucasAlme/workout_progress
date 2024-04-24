import styled from "styled-components/native";
import { Icon } from "react-native-elements";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;
export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  padding: 30px 20px 20px 20px;
`;

export const AddedMoreEx = styled.TouchableOpacity`
  padding: 20px 20px 0px 20px;
  flex-direction: row;
  align-items: center;
`;
export const AddMoreExTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;
`;

export const IconMore = styled(Icon).attrs({
  type: "ionicon",
  size: 18,
})`
  padding-right: 2px;
`;

export const List = styled.FlatList``;
