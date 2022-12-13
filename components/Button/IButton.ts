export default interface IButton {
    text: string,
    icon: "delete" | "edit",
    fn: () => any,
    fixed?: boolean
}