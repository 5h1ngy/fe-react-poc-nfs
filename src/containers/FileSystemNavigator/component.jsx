import _ from "lodash";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

import { Flex } from '@chakra-ui/react';

import withRouter from '../../hocs/withRouter';
import withConfig from "../../hocs/withConfig";
import Loader from '../../components/Loader';
import NoItems from '../../components/NoItems';
import FileSystemGrid from '../../components/FileSystemGrid';
import FileSystemCards from '../../components/FileSystemCards';

import { name as namePagesDashboard } from "../../store/pages/dashboard";
import { name as nameFileSystemNavigator } from "../../store/containers/fileSystemNavigator";

import { useTheme } from "./component.styles";

function FileSystemNavigator({ config, actions, state, navigation }) {
    const { currentFolder, loading, occurrences } = state[nameFileSystemNavigator]
    const { header } = state[namePagesDashboard]

    const style = useTheme({
        primaryColor: config.theme.primaryColor,
        secondaryColor: config.theme.secondaryColor
    })

    useEffect(() => {
        actions.setHeaderOptions('enableHiddenFiles', false)
        actions.setHeaderSwitchOptions('enableViewModeGrid', true)
    }, []);

    useEffect(() => {
        const navigationObject = {
            label: _.startCase(navigation),
            href: `/${_.toLower(navigation)}`
        }

        actions.setNavbarNavigation(navigation, true)
        actions.setBodyActionbarNavigation([navigationObject])
        actions.getNFS(navigation);

    }, [navigation]);

    function handleOnSelect(path) {

        const directory = path.split('/')
            .filter(value => value !== '')
            .map((value, index, array) => ({
                label: _.startCase(value),
                href: `/${index !== 0 ? _.slice(array, 0, index + 1).join('/') : value}`
            }))

        actions.setBodyActionbarNavigation(directory)

        const newLocation = directory[directory.length - 1];
        actions.getNFS(newLocation.href);
    }

    return <Flex {...style.mainContainer(loading)}>

        <Loader condition={loading}>
            <NoItems condition={occurrences.length !== 0}>

                {header.multipleSwitch.switchOptions.enableViewModeGrid
                    ? <FileSystemGrid
                        currentFolder={currentFolder}
                        occurrences={occurrences}
                        onSelect={(path) => handleOnSelect(path)}
                    />
                    : undefined
                }

                {header.multipleSwitch.switchOptions.enableViewModeList
                    ? <FileSystemCards
                        currentFolder={currentFolder}
                        occurrences={occurrences}
                        onSelect={(path) => handleOnSelect(path)}
                    />
                    : undefined
                }

            </NoItems>
        </Loader>

    </Flex>
}

FileSystemNavigator.propTypes = {
    config: PropTypes.object.isRequired,
    navigation: PropTypes.string.isRequired,
}

FileSystemNavigator.defaultProps = {

}

export default withConfig("containers.FileSystemNavigator", withRouter(FileSystemNavigator))