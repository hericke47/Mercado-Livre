import styled from 'styled-components';
import { HiOutlineHeart, HiOutlineCheck, HiOutlineShieldCheck } from 'react-icons/hi'

export const Container =  styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const Condition =  styled.div`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row =  styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon =  styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: var(--color-blue);
  flex-shrink: 0;

  margin-left: 16px;
  cursor: pointer;
`;

export const DispatchTag =  styled.div`

`;

export const PriceCard =  styled.div`

`;

export const PriceRow =  styled.div`

`;

export const InstallmentsInfo =  styled.div`

`;

export const StockStatus =  styled.div`

`;

export const MethodCard =  styled.div`

`;

export const CheckIcon =  styled(HiOutlineCheck)`
  width: 24px;
  height: 24px;
  color: var(--color-green);
`;

export const Actions =  styled.div`

`;

type ButtonProps = { solid?: boolean}

export const Button =  styled.button<ButtonProps>`

`;

export const Benefits =  styled.div`

`;

export const ShieldIcon =  styled(HiOutlineShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
