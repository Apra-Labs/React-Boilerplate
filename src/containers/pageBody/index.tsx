interface PageBodyProps {
    body: JSX.Element
}

const PageBody: React.FC<PageBodyProps> = ({body}) => {
    return (
        <div>
            {body}
        </div>
    )
}

export default PageBody;