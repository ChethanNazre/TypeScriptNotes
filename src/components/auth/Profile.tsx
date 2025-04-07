export type ProfileProps = {
    name: string
    email?: string
}

export const Profile = ({name}:ProfileProps) => {
    return <div>Private Profile Component
        Name is {name}
    </div>
}