import React from 'react';
import { Button, Text, Title, Paper, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '256px',
    },
}));

const Landing = () => {
    const { classes } = useStyles();

    return (
        <div>
            <Paper shadow="md" p="md" className={classes.container}>
                <Title>Landing Page</Title>
                <Text>
                    M Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae elit et odio viverra tincidunt viverra at mauris.
                    Curabitur tortor urna, fermentum quis gravida et, maximus
                    vitae ante. Nulla tempus malesuada neque, vel laoreet odio
                    varius non. Cras dictum enim sed libero convallis aliquet.
                    Suspendisse ut vulputate ipsum. Phasellus eget turpis sed
                    orci vestibulum auctor. In hac habitasse platea dictumst.
                    Suspendisse eu purus at est rutrum vestibulum in sed lectus.
                    Ut gravida sodales lobortis. Donec accumsan accumsan dolor
                    ac imperdiet. Proin scelerisque turpis arcu. Ut aliquet,
                    magna nec suscipit dignissim, ipsum nulla iaculis sem, eget
                    condimentum nisl risus et dui. Pellentesque tincidunt lorem
                    vitae metus vestibulum, tristique congue augue porta.
                    Pellentesque eget erat lobortis lectus sodales sodales.
                    Morbi tempus placerat mollis. Mauris ipsum dui, gravida ut
                    convallis in, tristique sed erat. Nulla pharetra at justo
                    sed vestibulum. Nunc rhoncus ex sed odio viverra, non
                    commodo orci ullamcorper. Integer non condimentum sapien, eu
                    viverra sapien. In nibh leo, facilisis at convallis eu,
                    viverra et lacus. Sed sit amet ligula eget tortor efficitur
                    eleifend sed at ipsum. Donec suscipit erat lacus, non luctus
                    ipsum suscipit eu. Vivamus ultrices mauris ut tempus
                    laoreet. Aenean a risus molestie, bibendum ligula at,
                    consequat turpis. Proin volutpat non odio ac facilisis.
                    Phasellus id arcu sed risus pulvinar efficitur. Etiam
                    fermentum leo elit. Duis porta sapien nisl, vel hendrerit
                    est lacinia lobortis. Proin convallis, orci vel feugiat
                    eleifend, libero lectus sodales lacus, sit amet gravida leo
                    turpis et mi. Integer eget nunc maximus neque rutrum
                    venenatis. Nulla facilisis euismod mauris sed facilisis.
                    Mauris eleifend tortor vel erat suscipit, non elementum mi
                    suscipit. Morbi condimentum arcu vel urna facilisis
                    placerat. Donec molestie felis dignissim nibh aliquet, sed
                    rutrum metus porta. Aliquam elementum ullamcorper sagittis.
                    Phasellus nisl felis, convallis quis leo eu, laoreet
                    volutpat urna. Aenean non enim neque. Sed quis hendrerit
                    tortor. In in tempus ligula. In at erat ut dui dignissim
                    ornare ut ut purus. Nulla rhoncus sem imperdiet dapibus
                    sagittis. Praesent tincidunt ex et blandit laoreet. Fusce
                    mollis neque non quam tempus, eu dictum libero auctor. Nulla
                    sed auctor orci. Proin tincidunt mauris pellentesque
                    accumsan facilisis. Cras sit amet massa diam. Nullam ut
                    laoreet lectus. Aliquam erat volutpat. Duis euismod ante
                    lectus. Nam feugiat non magna ut consectetur. Nunc sit amet
                    felis rutrum, auctor sem sit amet, accumsan quam. Mauris sit
                    amet nisi et sapien molestie tempor in sit amet velit. Cras
                    ultrices placerat dui, a ornare risus venenatis vitae. Cras
                    eros orci, convallis a consectetur quis, luctus eget enim.
                    Proin efficitur, sapien a maximus auctor, magna lacus
                    tincidunt ipsum, eu fringilla eros ipsum sit amet risus.
                </Text>
                <Button>Get Started</Button>
            </Paper>
        </div>
    );
};

export default Landing;
