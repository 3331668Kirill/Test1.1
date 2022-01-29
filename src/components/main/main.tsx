import React, {useEffect, useState} from 'react';
import DataGrid, {
    Column,
    Pager,
    Paging,
    FilterRow, Button, Editing,
} from 'devextreme-react/data-grid';
import {postsAPI, TypeState, TypeValidatingForm, TypeValidatingFormDelete} from "../../utils/api";


export default function Main() {

    const [data, setData] = useState<TypeState[]>([])
    const [error, setError] = useState<string>('')

    const err = (err: any) => {
        console.error(err)
        setError("Server error, try again later")
    }
    useEffect(() => {
        postsAPI.getPosts()
            .then(data => setData(data.data))
            .catch(err)
    }, [])

    const addNewPost = (e: TypeValidatingForm) => {
        let post = JSON.stringify(e.newData)
        postsAPI.addPosts(post)
            .then(res => console.log(res))
            .catch(err)
    }

    const deletePost = (e: TypeValidatingFormDelete) => {
        postsAPI.deletePost(e.data.id)
            .then(res => console.log(res))
            .catch(err)
    }

    return (
        <React.Fragment>
            <h2 className={'content-block'}>Posts</h2>
            {error !== ''
                ? <div className={'content-block error'}>{error}</div>
                : <DataGrid
                    dataSource={data}
                    className={'dx-card wide-card'}
                    id="grid"
                    onRowRemoved={deletePost}
                    onRowValidating={addNewPost}
                    keyExpr={"id"}
                    showBorders={true}
                >
                    <Paging defaultPageSize={5}/>
                    <Pager showPageSizeSelector={true} showInfo={true}/>
                    <FilterRow visible={true}/>
                    <Editing
                        mode="row"
                        form={'new'}
                        useIcons={true}
                        allowUpdating={true}
                        allowAdding={true}
                        texts={{addRow: 'Add new row'}}
                        allowDeleting={true}/>
                    <Column type="buttons" width={130}>
                        <Button visible={true} name="edit"/>
                        <Button visible={true} name="delete"/>
                    </Column>

                    <Column dataField={'id'} width={70}/>
                    <Column
                        dataField={'userId'}
                        width={80}
                        key={'id'}
                    />
                    <Column
                        dataField={'title'}
                        width={180}
                    />
                    <Column
                        dataField={'body'}
                        width={180}
                    >

                    </Column>

                </DataGrid>
            }

        </React.Fragment>
    )
}






