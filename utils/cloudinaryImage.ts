export default function cloudinaryImage(src: string, width?: number, quality?: number, ignoreParams?: boolean) {
    const params = ['f_auto', 'c_limit', `${width ? 'w_' + width : ''}`, `q_${quality || 'auto'}`];
    return `https://res.cloudinary.com/dwet4ad3d/image/upload/${params.filter(x => !ignoreParams && !!x).join(
        ','
    )}/${src}`
}