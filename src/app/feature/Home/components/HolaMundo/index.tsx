import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivSection, H1Title, H2Title, H3Title, LiText, TextBody, UlList } from './styles';


interface HolaMundoProps {
  msg: string;
}

export const HolaMundo: React.FC<HolaMundoProps> = ({ msg }) => 
{
  return(
    <DivContainer>
      <div>
        <H1Title>{msg}</H1Title>
      </div>

      <div>
        <H2Title>Estructura de Código</H2Title>
        <TextBody>Organizada, mantenible y escalable</TextBody>
      </div>

      <DivSection>
        <H3Title>Directorios</H3Title>

        <TextBody>
          <b>Core: </b>Núcleo de la aplicación o configuración principal, la cual controla o estable el comportamiento de la aplicación.
        </TextBody>

        <TextBody>
          <b>Feature:</b> Módulo principales del proyecto, cada uno de ellos contiene la funcionalidad específica y que agrega valor a la totalidad del proyecto.
        </TextBody>

        <TextBody>
          <b>Shared:</b> Componentes, utilitarios y/o recursos que se pueden utilizar en toda la aplicación, es decir, son compartidos por los módulos principales.
        </TextBody>
      </DivSection>

      <DivSection>
        <H3Title>Buenas prácticas de desarrollo</H3Title>

        <UlList>
          <LiText>
            <a href='https://dev.to/abrahamlawson/react-style-guide-24pp'>Manual de estilos</a>
          </LiText>
          <LiText>Versionamiento del código</LiText>
          <LiText>Código limpio</LiText>
          <LiText>Pruebas</LiText>
        </UlList>
      </DivSection>

      <DivSection>
        <H2Title>Proceso</H2Title>
        <TextBody>
          El proceso de desarrollo se lleva a cabo en varias etapas, las cuales nos garantizan que el código será desplegado en los ambientes con la mejor calidad y asegurando un correcto funcionamiento.
        </TextBody>

        <UlList>
          <LiText>Programación</LiText>
          <LiText>Pruebas</LiText>
          <LiText>Integración (CI)</LiText>
          <LiText>Despliegue (CD)</LiText>
        </UlList>
      </DivSection>
    </DivContainer>
  );
};

HolaMundo.propTypes = {
  msg: PropTypes.string.isRequired,
};
