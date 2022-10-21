function Comment(props) {
    return (
        <p className="commentP" key={props.id}>
            <span className="writer">nahyunkwon</span>
            <span className="writer_text">{props.content}</span>
        </p>
    );
}
export default Comment;
