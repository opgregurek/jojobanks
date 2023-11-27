export default function useCloudinaryImage(src: string, width: number, quality?: number) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `https://res.cloudinary.com/dwet4ad3d/image/upload/${params.join(
        ','
    )}/v1700744000/${src}`
}