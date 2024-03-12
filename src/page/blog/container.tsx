"use client"

import { Grid } from '@/components/grid';
import { DummyBlog } from '@/dummys/dummy-blog';
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { BtnPagination } from '@/components/button/pagination/button';
import Blog from './blog';

const BlogsPerPage = 6
const PaginationLimit = 5

const ContainerBlog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Menghitung indeks awal dan akhir untuk blog pada halaman saat ini
    const indexOfLastBlog = currentPage * BlogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage;

    // Sort DummyBlog berdasarkan judul dari A ke Z
    const sortedBlogs = [...DummyBlog].sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    });

    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Mengubah halaman
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const getPaginationNumbers = () => {
        const totalPages = Math.ceil(DummyBlog.length / BlogsPerPage)
        const halfLimit = Math.floor(PaginationLimit / 2)

        let start = currentPage - halfLimit
        let end = currentPage + halfLimit

        if (start < 1) {
            start = 1
            end = PaginationLimit
        }

        if (end > totalPages) {
            end = totalPages
            start = Math.max(1, end - PaginationLimit + 1)
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    }

    const lastIndex = Math.ceil(DummyBlog.length / BlogsPerPage)

    return (
        <>
            <Grid>
                {
                    currentBlogs.map((item, index) => (
                        <Blog
                            key={index}
                            index={index}
                            cover={item.cover}
                            title={item.title}
                            desc={item.desc}
                            categories={item.categories.map(category => category.category)}
                            authors={[{
                                createdBy: item.author.createdBy,
                                photoProfile: item.author.photoProfile,
                                createdAt: item.author.createdAt
                            }]}
                            totalComments={item.totalComments}
                            totalLikes={item.totalLikes}
                            totalViews={item.totalViews}>
                        </Blog>
                    ))
                }
            </Grid>

            {/* Pagination */}
            <nav>
                <ul className='flex items-center gap-2'>
                    {/* Left */}
                    <li>
                        <BtnPagination
                            onclick={() => paginate(1)}
                            addClass='text-base'>
                            <FiChevronsLeft />
                        </BtnPagination>
                    </li>
                    <li>
                        {
                            currentPage === 1 
                            ? <BtnPagination
                                onclick={() => paginate(1)}
                                addClass='text-base'
                                active={currentPage == 1}>
                                <FiChevronLeft />
                            </BtnPagination>
                            : <BtnPagination
                                onclick={() => paginate(currentPage - 1)}
                                addClass='text-base'>
                                <FiChevronLeft />
                            </BtnPagination>
                        }
                    </li>

                    {/* Number */}
                    {getPaginationNumbers().map(pageNumber => (
                        <li key={pageNumber}>
                            <BtnPagination 
                                onclick={() => paginate(pageNumber)}
                                active={pageNumber == currentPage}>
                                {pageNumber}
                            </BtnPagination>
                        </li>
                    ))}

                    {/* Right */}

                    <li>
                        {
                            currentPage === lastIndex 
                            ? <BtnPagination
                                onclick={() => paginate(lastIndex)}
                                addClass='text-base'
                                active={currentPage == lastIndex}>
                                <FiChevronRight />
                            </BtnPagination>
                            : <BtnPagination
                                onclick={() => paginate(currentPage + 1)}
                                addClass='text-base'>
                                <FiChevronRight />
                            </BtnPagination>
                        }
                    </li>

                    <li>
                        <BtnPagination
                             onclick={() => paginate(lastIndex)}
                             addClass='text-base'>
                            <FiChevronsRight />
                        </BtnPagination>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default ContainerBlog;
