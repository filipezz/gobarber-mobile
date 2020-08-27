import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  padding: 0 30px 130px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
`;
export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;
